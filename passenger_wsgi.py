import os, sys
sys.path.insert(0, '/var/www/u1151312/data/www/task.dzygman.com/task')
sys.path.insert(1, '/var/www/u1151312/data/djangoenv/lib/python3.7/site-packages')
os.environ['DJANGO_SETTINGS_MODULE'] = 'task.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()