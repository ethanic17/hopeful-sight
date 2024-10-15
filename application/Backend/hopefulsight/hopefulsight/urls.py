# hopefulsight/urls.py

from django.contrib import admin
from django.urls import path, include

from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

from core import routers

from user.urls import router as user_router

router = routers.DefaultRouter()
router.registry.extend(user_router.registry)

schema_view = get_schema_view(
   openapi.Info(
      title="HopefulSight API",
      default_version='v1',
      description="API documentation for HopefulSight",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),  # Include core URLs as the root
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('api-auth/', include('rest_framework.urls')),
]
