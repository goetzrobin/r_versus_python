FROM continuumio/anaconda3:5.3.0 as setup
RUN conda install -y r-essentials
RUN conda install -y tensorflow
RUN conda install -y r-keras
RUN conda install -y r-catools
RUN conda install -c conda-forge r-arules
RUN pip install keras

FROM setup
RUN jupyter notebook --generate-config
COPY ./jupyter_notebooks /jupyter_notebooks
COPY ./jupyter_notebook_config.py /root/.jupyter/jupyter_notebook_config.py
EXPOSE 8888
RUN find ./jupyter_notebooks -type f -exec chmod 444 {} \;
CMD ["jupyter","notebook"]
