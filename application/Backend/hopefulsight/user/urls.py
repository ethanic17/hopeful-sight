from django.urls import path
from .views import UserViewSet
from rest_framework.viewsets import ModelViewSet

urlpatterns = [
    path("", UserViewSet.as_view({"get": "list", "post": "create"})),
]