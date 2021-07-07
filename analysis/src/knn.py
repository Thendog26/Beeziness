import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import (KNeighborsClassifier,
                               NeighborhoodComponentsAnalysis)
from sklearn.pipeline import Pipeline
import pandas as pd

# import data
path = '../datasets/tem_hum_bushfire.csv'
training_set = pd.DataFrame(pd.read_csv(path))

# set responsive and explanatory variable
y = training_set['bushfire'].to_numpy()
X = training_set[['temperature', 'humidity']].to_numpy()

# set parameter
n_neighbors = 3

# generate training and testing subset
X_train, X_test, y_train, y_test = \
    train_test_split(X, y, stratify = y, test_size = 0.7, random_state = 42)

# step size in the mesh
h = 0.01

# Create color maps
cmap_light = ListedColormap(['#FFAAAA', '#AAFFAA', '#AAAAFF'])
cmap_bold = ListedColormap(['#FF0000', '#00FF00', '#0000FF'])

# select two algorithms 'KNN' and 'NCA, KNN'
names = ['KNN', 'NCA, KNN']
classifiers = [Pipeline([('scaler', StandardScaler()),
                         ('knn', KNeighborsClassifier(n_neighbors=n_neighbors))
                         ]),
               Pipeline([('scaler', StandardScaler()),
                         ('nca', NeighborhoodComponentsAnalysis()),
                         ('knn', KNeighborsClassifier(n_neighbors=n_neighbors))
                         ])
               ]

# set dimension for canva
x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
xx, yy = np.meshgrid(np.arange(x_min, x_max, h),
                     np.arange(y_min, y_max, h))

# generate new data for prediction
new_data = [[[42,0.8]], [[33,0.2]]]

indices = (0, 1)
# initialise classification and probability
res = [-5] * 2
prob = [[], []]

# data fitting, back test and visualization
for name, classifier, index in zip(names, classifiers, indices):
    # data fitting an back test
    classifier.fit(X_train, y_train)
    score = classifier.score(X_test, y_test)

    # plot the decision boundary
    # assign a color to each point in the mesh [x_min, x_max]x[y_min, y_max]
    Z = classifier.predict(np.c_[xx.ravel(), yy.ravel()])

    # predict new data
    res[index] = classifier.predict(new_data[index])
    prob[index] = classifier.predict_proba(new_data[index])

    # Put the result into a color plot
    Z = Z.reshape(xx.shape)
    plt.figure()
    plt.pcolormesh(xx, yy, Z, cmap=cmap_light, alpha=.8)

    # Plot also the training and testing points
    plt.scatter(X[:, 0], X[:, 1], c = y, cmap = cmap_bold, edgecolor = 'k', s = 20)
    plt.xlim(xx.min(), xx.max())
    plt.ylim(yy.min(), yy.max())
    plt.title("{} (k = {})".format(name, n_neighbors))
    plt.text(0.9, 0.1, '{:.2f}'.format(score), size=15,
             ha ='center', va ='center', transform=plt.gca().transAxes)

# print classification and probability
# 0 is non bush fire, 1 is bush fire
print(res)
# [0.3, 0.7] probability of non bush fire is 0.3, probability of bush fire is 0.7
print(prob)
plt.show()