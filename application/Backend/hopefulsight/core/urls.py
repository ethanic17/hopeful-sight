# core/urls.py or main project-level urls.py

from django.urls import path, include
from .views import api_root
from rest_framework.routers import DefaultRouter
from user.views import UserViewSet

app_name = "core"

router = DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
]
