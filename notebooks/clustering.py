import pandas as pd
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import os

os.makedirs('outputs/figures', exist_ok=True)

routes = pd.read_csv('data/processed/routes_features.csv')

FEATURES = ['zone_enc', 'type_enc', 'name_length', 'origin_freq', 'dest_freq', 'is_premium']
X = routes[FEATURES].fillna(0)

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

inertias = []
for k in range(2, 10):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    km.fit(X_scaled)
    inertias.append(km.inertia_)

plt.figure(figsize=(8, 4))
plt.plot(range(2, 10), inertias, marker='o')
plt.axvline(x=4, color='red', linestyle='--', label='K=4 chosen')
plt.title('Elbow Method')
plt.xlabel('K')
plt.ylabel('Inertia')
plt.legend()
plt.tight_layout()
plt.savefig('outputs/figures/elbow.png', dpi=150)
plt.close()

kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
routes['cluster'] = kmeans.fit_predict(X_scaled)

cluster_labels = {
    0: 'Peripheral Special Routes',
    1: 'Central Ordinary Routes',
    2: 'Central Variant Routes',
    3: 'Shivajinagar Corridor'
}
routes['cluster_label'] = routes['cluster'].map(cluster_labels)

pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)
colors = ['#f7c948', '#6eb5ff', '#3dd68c', '#ff6b6b']

plt.figure(figsize=(10, 7))
for i, label in cluster_labels.items():
    mask = routes['cluster'] == i
    plt.scatter(X_pca[mask, 0], X_pca[mask, 1], c=colors[i], label=label, alpha=0.5, s=10)
plt.title('Route Clusters (PCA 2D)')
plt.legend()
plt.tight_layout()
plt.savefig('outputs/figures/clusters_pca.png', dpi=150)
plt.close()

print(routes.groupby('cluster_label').agg(
    count=('route_id', 'count'),
    top_zone=('zone', lambda x: x.mode()[0]),
    top_type=('route_type_label', lambda x: x.mode()[0]),
    avg_name_len=('name_length', 'mean'),
    avg_origin_freq=('origin_freq', 'mean')
).round(2).to_string())

routes.to_csv('data/processed/routes_clustered.csv', index=False)
print("Done: 04_clustering")