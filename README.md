# Mathematics for Artificial Intelligence Research

This book aims to cover *nearly all* the math needed to conduct research in artificial intelligence subfields (NLP, CV, RL, etc).

## The Strange Web Of AI Mathematics
Mathematics knowledge is often unexpectedly useful in the scientific literature of artificial intelligence.

Let’s take a simple example: calculating the mean of $n$ numbers. This concept should be familiar to most readers. 

Concretely, suppose you have $n$ datapoints, $x_1, \ldots, x_n$ all of which are real numbers (positive or negative). To calculate the mean, you sum these values and divide by $n$. This is expressed mathematically as:

$$
\mu = \frac{1}{n} \sum_{i=1}^{n} x_i
$$

Suppose the ${(n+1)}^{th}$ datapoint comes along. How can we compute the mean of all $(n+1)$ datapoints, if we already know the mean of the first $n$?

Recomputing from scratch is one approach, but it is tedious. Instead, we can use an incremental update method to continuously calculate the mean with each incoming datapoint. 

The formula for this is:

$$
\mu_{n+1} = \mu_n + \frac{x_{n+1} - \mu_n}{n+1}
$$

This allows us to update the mean in an online fashion, without needing to recompute everything. 

Now, you might ask, "That's neat, but when would I ever need this?". 

It's a fair question. On my computer (an M1 Apple Macintosh), I ran two programs: one which recomputes the mean from scratch for each datapoint, and one which computes the mean incrementally. For 10,000 datapoints, the former took 140 milliseconds while the latter took 2.4 milliseconds. While this is a significant difference, I could not notice it; the difference would only be apparent when I had millions of datapoints (which is rare). So it seems like the incremental mean is a mathematical curiosity. 

However, what if I told you that a slight modification to the incremental-mean method is essential for training stochastic multi-armed bandits, a kind of reinforcement learning algorithm. Bandit algorithms, which estimate the true mean from samples, are fundamental to online decision-making in applications like news recommendation and A/B testing. They must also often run in sub-millisecond latency, or else they are too slow to be practically usable. 

Suddenly, this time difference becomes very important. 

As a practitioner, math is your toolbox. You never know when a mathematical concept will suddenly become critical when developing or applying an algorithm. 
As a researcher your job is to weave gossamer threads in this mathematical web, transforming once-impossible problems into elegant, interconnected solutions. Without becoming familiar with these mathematical threads, you limit your ability to make the connections.

# CONTRIBUTING
## Step 1: Setup instructions

```bash
cd book/

conda create --prefix env python=3.12 --yes  

conda activate ./env 

pip install uv
uv pip install pandas numpy s3fs tqdm pydantic urllib3 ipython ipykernel jupyterlab jupyter jupyter_contrib_nbextensions ipywidgets statsmodels scikit-learn nltk plotly plotly-express bokeh seaborn hvplot holoviews matplotlib

## From: https://quarto.org/docs/computations/python.html#installation

conda install jupyter --yes
python3 -m ipykernel install --user --name quarto-mair-book

quarto check jupyter
```

## Step 2: VSCode Setup instructions
(Needs Step 1 to be completed)
1. Download "Quarto" extension.
2. Clone this repo locally.
3. File > New Window 
4. (In new window) File > Open folder > open repo folder
4. Cmd + Shift + P > Python > Select Interpreter
5. Select ./book/env/bin/python