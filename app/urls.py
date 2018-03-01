from django.urls import path, include
from rest_framework.routers import DefaultRouter
from app import views

router = DefaultRouter()
router.register(r'todos', views.TodosViewSet)

urlpatterns = [
    path('', include(router.urls))
]