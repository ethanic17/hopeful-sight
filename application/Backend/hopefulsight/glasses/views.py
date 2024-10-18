from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework import permissions
from .models import Glasses
from .serializers import GlassesSerializer
# Create your views here.


class GlassesViewSet(viewsets.ModelViewSet):
    queryset = Glasses.objects.all()
    serializer_class = GlassesSerializer
    permission_classes = [permissions.IsAuthenticated]