from django.shortcuts import render
from rest_framework import viewsets

from app.models import Todo
from app.serializers import TodoSerializers

class TodosViewSet(viewsets.ModelViewSet):
	queryset = Todo.objects.all()
	serializer_class = TodoSerializers