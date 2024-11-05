from django.urls import path, include   
from .views import RegionViewSet

from core.routers import DefaultRouter
router = DefaultRouter()
router.register(r"regions", RegionViewSet, basename="regions")
app_name = "region"

urlpatterns = [
    path("", include(router.urls)),
    path('regions/donations-summary/', RegionViewSet.as_view({"get": "donations_summary"}), name="donations_summary"),
]