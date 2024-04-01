# from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView


class Routes(APIView):
    def get(self, request):
        routes = [
            "/api/token",
            "/api/token/refresh",
        ]
        return Response(routes)
