from django.contrib import admin

from .models import Job
from .serializers import JobSerializer
from rest_framework import viewsets, permissions, generics
from rest_framework.generics import CreateAPIView, UpdateAPIView

admin.site.register(Job)


class JobViewSet(generics.ListAPIView):
    """
        View used to handle get/list requests to view inactivated jobs.
    """
    queryset = Job.objects.filter(validated=False)
    serializer_class = JobSerializer


class JobListView(generics.ListAPIView):
    """
    View used to handle get/list requests to view activated jobs.
    """
    queryset = Job.objects.filter(validated=True)
    serializer_class = JobSerializer


class CreateJobView(CreateAPIView):
    """
        View used to create new jobs.
    """
    model = Job
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JobSerializer


class UpdateJobView(UpdateAPIView):
    """
        View used to update jobs.
    """
    queryset = Job.objects.all()
    model = Job
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JobSerializer
