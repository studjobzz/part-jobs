from rest_framework import serializers
from .models import Job


class JobSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Job
        fields = ('pk', 'title', 'description', 'validated', 'user', 'created_on', 'image')
