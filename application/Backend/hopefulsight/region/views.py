from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db.models import Sum
from .models import Region
from .serializers import RegionSerializer


# Create your views here.
class RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer

    @action(detail=True, methods=["GET"])
    def donations_summary(self, request):
        regions = Region.objects.annotate(total_donations=Sum("donations__amount"))
        serializer = self.get_serializer(regions, many=True)
        return Response(serializer.data)