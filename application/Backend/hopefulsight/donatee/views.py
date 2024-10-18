from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework import permissions
from .models import Donatee
from .serializers import DonateeSerializer
# Create your views here.


class DonateeViewSet(viewsets.ModelViewSet):
    queryset = Donatee.objects.all()
    serializer_class = DonateeSerializer
    permission_classes = [permissions.IsAuthenticated]
