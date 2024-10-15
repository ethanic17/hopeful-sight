from django.urls import path, include   
from .views import UserViewSet

from core.routers import DefaultRouter
router = DefaultRouter()
router.register(r"users", UserViewSet, basename="users")
app_name = "user"

urlpatterns = [
    path("", include(router.urls)),
]