# hopefulsight/urls.py

from django.contrib import admin
from django.urls import path, include

from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

from core import routers

from user.urls import router as user_router
from account.urls import router as account_router
from glasses.urls import router as glasses_router
from donator.urls import router as donator_router
from donatee.urls import router as donatee_router
from region.urls import router as region_router
from donation.urls import router as donation_router

router = routers.DefaultRouter()
router.registry.extend(user_router.registry)
router.registry.extend(account_router.registry)
router.registry.extend(glasses_router.registry)
router.registry.extend(donator_router.registry)
router.registry.extend(donatee_router.registry)
router.registry.extend(region_router.registry)
router.registry.extend(donation_router.registry)

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
