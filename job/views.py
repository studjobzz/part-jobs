from job.models import Job
from job.serializers import JobSerializer
from rest_framework import viewsets, permissions
from rest_framework.generics import CreateAPIView, UpdateAPIView


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.filter(validated=False)
    serializer_class = JobSerializer


class CreateJobView(CreateAPIView):

    model = Job
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JobSerializer


class UpdateJobView(UpdateAPIView):
    queryset = Job.objects.all()
    model = Job
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JobSerializer
