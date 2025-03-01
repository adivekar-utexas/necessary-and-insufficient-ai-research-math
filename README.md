# Mathematics for Artificial Intelligence Research

Embarking on research in AI – whether in NLP, Computer Vision, or Reinforcement Learning – calls for a robust mathematical foundation. This book starts with set theory and probability, and gradually ascends to graduate-level topics.

Rather than following a linear progression, imagine a spiral staircase encircled by key pillars: linear algebra, probability, real analysis, and more. At each turn, you’ll revisit these areas at deeper levels, weaving them together into a coherent framework. By the time you reach the summit, you’ll not only appreciate each subject in isolation but also see how they all converge in advanced AI applications.

To experience this journey in full, visit [adivekar.quarto.pub/ai-research-math](adivekar.quarto.pub/ai-research-math). If you find this approach valuable, please consider **starring this repository** - it helps us continue refining these materials for the research community.

![art-deco-spiral-staircase](images/art-deco-spiral-staircase.png)


<!-- ## A Mathematical Path to AI Mastery -->


## CONTRIBUTING

### Step 1: Clone the repository
```bash
cd ~
git clone https://github.com/adivekar-utexas/ai-research-math.git
cd ai-research-math/
```

### Step 2: Setup dependencies

```bash
cd book/

conda create --prefix env python=3.12 --yes  

conda activate ./env 

pip install uv
uv pip install pandas numpy s3fs tqdm pydantic urllib3 ipython ipykernel jupyterlab jupyter jupyter_contrib_nbextensions ipywidgets statsmodels scikit-learn nltk plotly plotly-express bokeh seaborn hvplot holoviews matplotlib

conda install jupyter --yes
python3 -m ipykernel install --user --name quarto-mair-book

quarto check jupyter
```

### Step 3: Setup VSCode
(Needs Step 1 to be completed)
1. Download "Quarto" extension.
2. Clone this repo locally.
3. File > New Window 
4. (In new window) File > Open folder > open repo folder
4. Cmd + Shift + P > Python > Select Interpreter
5. Select ./book/env/bin/python

### Step 4: Make a contribution
After you have made a contribution to your local copy, [commit it](https://github.com/git-guides/git-commit) and [raise a pull-request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). 
We will review such requests within 72 hours.