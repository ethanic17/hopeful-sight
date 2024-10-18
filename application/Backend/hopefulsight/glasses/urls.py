from django.urls import path, include   
from .views import GlassesViewSet

from core.routers import DefaultRouter
router = DefaultRouter()
router.register(r"glasses", GlassesViewSet, basename="glasses")
app_name = "glasses"

urlpatterns = [
    path("", include(router.urls)),
]