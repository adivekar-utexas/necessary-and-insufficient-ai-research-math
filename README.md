# Artificial Intelligence Math, From Scratch

Mastering AI begins with mastering the math. **AI Math From Scratch** gives you the necessary foundation, with no jargon and no paywalls. 

We begin at high-school level set theory and probability, then advance through linear algebra, calculus, real analysis, and beyond until you can read graduate-level papers with confidence.

Think of the journey as a spiral staircase wrapped in sturdy pillars. Each turn links the pillars tighter, revealing how the pieces power NLP, computer vision, reinforcement learning, and emerging AI paradigms. On the way up you’ll also pick up modern tooling - NumPy, PyTorch, and parallel-Python patterns - so the math lives in real code, not just on paper.

Ready to level up? Start reading here → **[adivekar.quarto.pub/ai-math-from-scratch](https://adivekar.quarto.pub/ai-math-from-scratch)** 🚀

## ⭐ Support This Project ⭐

**Please help us by starring this repository!**

Every single GitHub star is a vote for open, inclusive AI education. If our textbook (or the idea of it) helps you, inspires you, or simply sounds cool, please click the ⭐️ button at the top-right of the repo. 

It takes one second, and creates real impact:

| What your star does | Why it matters |
|---------------------|---------------|
| **Boosts visibility** | More educators, students, and potential contributors discover the project. |
| **Unlocks resources** | High star counts help us secure free compute credits & tooling grants for contributors. |
| **Proves demand** | Signals to mentors, reviewers, and future partner orgs that *free AI math* is worth backing. |
| **Motivates the team** | A tiny dopamine hit keeps volunteers refining examples, diagrams, and proofs. |

**TL;DR:** If you like what we’re building, click the ⭐️!

### Who benefits from your support?

* **Students in low-income or under-resourced regions** – they get a high-school to graduate-level AI math roadmap at zero cost. 
* **Self-taught AI engineers** – clear, open-source explanations beat paywalled courses.  
* **The research community** – a common reference lowers the barrier to entry and raises the floor of understanding.

### How else can you help?

* **Share** the repo on social media or with your study group.  
* **Open an issue** with suggestions, typos, or tricky sections that need love.  
* **Submit a Pull-Request** – new examples, clearer wording, or fresh diagrams are always welcome! See the CONTRIBUTING section below.

![art-deco-spiral-staircase](images/art-deco-spiral-staircase.png)


## CONTRIBUTING

If you are interested in contributing to the project, welcome! Please go through the following steps:

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
