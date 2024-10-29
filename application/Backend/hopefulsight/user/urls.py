# from django.urls import path
# from .views import UserViewSet
# from rest_framework.viewsets import ModelViewSet
# from application.Backend.hopefulsight.views import UserViewSet # Maybe importation problem?


from django.urls import path
from .views import UserViewSet  # Ensure this path is correct for your project structure
from rest_framework.routers import DefaultRouter
# urlpatterns = [
#     path("", UserViewSet.as_view({"get": "list", "post": "create"})),
# ]


# # Assuming UserViewSet might have more actions or you want to simplify URL config
# router = DefaultRouter()
router = DefaultRouter()

# DefaultRouter which automatically generates URLs for all the
# standard actions provided by ModelViewSet or ViewSet classes.

router.register(r'users', UserViewSet, basename='user')

# Starting API endpoints, without needing to define each URL pattern manually

# urlpatterns = [
#     path('application/Backend/hopefulsight/user.py', UserViewSet.as_view({"get": "list", "post": "create"}), name='user-list-create'),
# ] + router.urls  # Combine router URLs with any other paths

urlpatterns = [
    path('user', UserViewSet.as_view({"get": "list", "post": "create"}), name='user-list-create'),
] + router.urls  # Combine router URLs with any other paths

# get list, post create
# name set to user-list-create
# router.urls is a list of URL patterns generated by DefaultRouter