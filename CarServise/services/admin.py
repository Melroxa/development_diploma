from django.contrib import admin
from .models import Category, Product


admin.site.register(Category)
admin.site.register(Product)
# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ['name', 'slug']
#     prepopulated_fields = {'slug': ('name',)}
#
#
# admin.site.register(Category, CategoryAdmin)
#
#
# class ProductAdmin(admin.ModelAdmin):
#     list_display = ['name', 'slug', 'price']
#     list_editable = ['price']
#     prepopulated_fields = {'slug': ('name',)}
#
#
# admin.site.register(Product, ProductAdmin)
