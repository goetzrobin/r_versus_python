FROM goetzrobin/final_project_jupyter
RUN jupyter notebook --generate-config
COPY ./jupyter_notebook_config.py /root/.jupyter/jupyter_notebook_config.py
COPY ./jupyter_notebooks /jupyter_notebooks
EXPOSE 8888
RUN find ./jupyter_notebooks -type f -exec chmod 444 {} \;
CMD ["jupyter","notebook"]
