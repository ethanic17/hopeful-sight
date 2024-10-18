from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework import permissions
from .models import Donator
from .serializers import DonatorSerializer
# Create your views here.


class DonatorViewSet(viewsets.ModelViewSet):
    queryset = Donator.objects.all()
    serializer_class = DonatorSerializer
    permission_classes = [permissions.IsAuthenticated]