# Necessary and Insufficient Mathematics for Artifical Intelligence Researchers

## Step 1: CLI Setup instructions

```bash
cd book/

conda create --prefix env python=3.11.8 --yes  

conda activate ./env 

pip install uv
uv pip install "pandas==1.*" "numpy==1.*" xlrd XlsxWriter openpyxl fastparquet pyarrow orjson s3fs tqdm dill "pydantic==1.10.15" brotli urllib3 ipython ipykernel jupyterlab jupyter jupyter_contrib_nbextensions ipywidgets art tabulate statsmodels scikit-learn nltk altair plotly plotly-express bokeh seaborn "hvplot==0.10.0" holoviews matplotlib tiktoken "torch==2.3.0" datasets 

## From: https://quarto.org/docs/computations/python.html#installation

conda install jupyter  
python3 -m ipykernel install --user --name quarto-nim-air

quarto check jupyter
```

## Step 2: VSCode Setup instructions

1. Cmd + Shift + P
2. Python > Select Interpreter
3. Select ./env/bin/python