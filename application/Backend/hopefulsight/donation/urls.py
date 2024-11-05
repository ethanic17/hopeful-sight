from django.urls import path, include   
from .views import DonationViewSet

from core.routers import DefaultRouter
router = DefaultRouter()
router.register(r"donation", DonationViewSet, basename="donation")
app_name = "donation"

urlpatterns = [
    path("", include(router.urls)),
]