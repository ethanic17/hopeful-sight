from django.urls import path, include   
from .views import DonateeViewSet

from core.routers import DefaultRouter
router = DefaultRouter()
router.register(r"donatees", DonateeViewSet, basename="donatees")
app_name = "donatee"

urlpatterns = [
    path("", include(router.urls)),
]