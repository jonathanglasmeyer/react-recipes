from fabric.api import *
from fabric.operations import run, put
import os
from fabric.contrib.files import exists

project_name = os.path.basename(os.getcwd())
code_dir = 'dev/' + project_name

env.use_ssh_config = True
env.hosts = ['ocean']

def dispatcher():
    run('nginx-dispatcher.sh')

def minimize():
    # local('webpack')
    local('webpack --optimize-minimize --optimize-occurence-order --optimize-dedupe')

def push():
    run("mkdir -p {}".format(code_dir))
    put('fig.yml', code_dir)
    put('dist', code_dir)

def run_app():
    with cd(code_dir):
        run("fig up -d")

def deploy():
    minimize()
    push()
    run_app()

