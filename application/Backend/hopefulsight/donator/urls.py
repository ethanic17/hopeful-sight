from django.urls import path, include   
from .views import DonatorViewSet

from core.routers import DefaultRouter
router = DefaultRouter()
router.register(r"donators", DonatorViewSet, basename="donators")
app_name = "donator"

urlpatterns = [
    path("", include(router.urls)),
]