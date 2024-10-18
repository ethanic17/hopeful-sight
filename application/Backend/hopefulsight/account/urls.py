from django.urls import path, include   
from .views import AccountViewSet

from core.routers import DefaultRouter
router = DefaultRouter()
router.register(r"accounts", AccountViewSet, basename="accountss")
app_name = "account"

urlpatterns = [
    path("", include(router.urls)),
]