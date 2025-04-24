# Math for Artificial Intelligence, From Scratch

Learning AI in depth – whether in NLP, Computer Vision, Reinforcement Learning or beyond – required for a robust mathematical foundation. This book aims to provide it. It begins with high-school set theory and probability, and gradually ascends to cover graduate-level topics. 

Rather than following a linear progression, we weave together concpets across math subfields. Imagine, as in the image below, a winding staircase encircled by pillars: linear algebra, probability, analysis, and more. As you progress, you'll learn to link them together into a coherent framework. By the time you reach the summit, we will have converged to advanced AI applications. Along the way, we will obtain a concise understanding of NumPy, PyTorch, and Python parallelism libraries. 

To experience this journey in full, visit [adivekar.quarto.pub/ai-math-from-scratch](https://adivekar.quarto.pub/ai-math-from-scratch). 

![art-deco-spiral-staircase](images/art-deco-spiral-staircase.png)


<!-- ## A Mathematical Path to AI Mastery -->


## CONTRIBUTING


⭐ Please help us by starring this repository ⭐ 
This helps us continue refining these materials for the AI community.

### Step 1: Clone the repository
```bash
cd ~
git clone https://github.com/adivekar-utexas/ai-math-from-scratch.git
cd ai-math-from-scratch/
```

### Step 2: Setup dependencies

```bash
cd book/

conda create --prefix env python=3.12 --yes  

conda activate ./env 

pip install uv
uv pip install pandas numpy s3fs tqdm pydantic urllib3 ipython ipykernel jupyterlab jupyter jupyter_contrib_nbextensions ipywidgets statsmodels scikit-learn nltk plotly plotly-express bokeh seaborn hvplot holoviews matplotlib

conda install jupyter --yes
python3 -m ipykernel install --user --name quarto-amfs-book

quarto check jupyter
```

### Step 3: Setup VSCode
(Needs Step 1 to be completed)
1. Download the "Quarto" extension.
2. Clone this repo locally.
3. File > New Window 
4. (In new window) File > Open folder > open repo folder
4. Cmd + Shift + P > Python > Select Interpreter
5. Select ./book/env/bin/python

### Step 4: Make a contribution
After you have made a contribution to your local copy, [commit it](https://github.com/git-guides/git-commit) and [raise a pull-request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). 
