---
title: "Publishing Reproducible Numerics: A Student's Perspective"
date: '2023-09-05'
---

![Nature Survey](/repro-numerics.png)

# Publishing Reproducible Numerics: A Student's Perspective

I gave a presentation at the RDM Workshop from the [SFB 1481: Sparsity and Singular Structures](https://www.sfb-s3.de/) at the RWTH Aachen about reproducible numerics. You can download the slides [here](/talks/presentation_c622ad28b665e7b61ce86733b96942111df15e1b.pdf). This post is a short summary.

Reproducibility has always been a fundamental aspect of scientific inquiry. But in recent years, the inability to reproduce a substantial number of scientific findings has cast doubt on the research process. This post delves into the motivation, definitions, tools, best practices, and concludes with the need for reproducibility in research.

## Motivation

**Status Quo:** A significant number of researchers utilize software for their research studies.

**Relevant Situations**:
- Starting a project based on an existing paper. For instance, understanding and reproducing results becomes the first step (akin to my M.Sc. thesis).
- Wanting to add a fresh perspective or idea to an old project.
- Making alterations to an experiment at a later stage, perhaps for a PhD thesis?

However, there's a **Problem**: Reproducing research is quite challenging in reality.

- Over 70% of researchers face difficulties reproducing others' experiments.
- Astonishingly, more than half struggle to reproduce their experiments.

![Nature Survey](/nature-survey.png)

_The crux?_ We require strategies to enhance reproducibility. But remember, no labs are involved, only computers.

## What Does "Reproducible Numerics" Mean?

**Definition:** It refers to the ability to reproduce the exact numerical results using an identical setup.

**Why is it crucial?**
- It fosters trust and assures accuracy.
- It allows researchers to build upon previous work, akin to "standing on the shoulders of giants."

But, **What can go wrong?**
- Sometimes, only the method's "description" is available, sans the scripts.
- Vital information like parameters might be missing.
- Software versions could be unknown.
- Essential datasets might be unavailable.
- There might be the use of proprietary software.
- Differences in operating systems and hardware can introduce inconsistencies.

![Numerical Experiments](/exp1.png)
![Numerical Experiments](/exp2.png)
![Numerical Experiments](/exp3.png)

## Tools & Best Practices

### Reproducable Progress (with Git)

**Version Control** is achievable with Git.
- The common **Problem**: Filenames like `paper-v1.tex` progress to `paper-v3-final.tex` and sometimes even `paper-v3-FINALLL.tex`.
- **Solution**: Instead of saving entire versions, track only the differences.
- **Workflow**: It involves commands like `git add`, `git commit`, and `git push`.
- Git allows reverting to previous versions and also facilitates asynchronous collaboration.
- Platforms today also offer features like issue tracking, automated tests, and more.
- For large binary files, Git LFS can be a lifesaver.

![Git Commit](/git-commit.png)

### Reproducable Environments (with Docker)

Different individuals have different setups. One solution is **Virtualization** with Docker.
- It lets you create a universal "cooking recipe" or a `Dockerfile`.
- The workflow involves building a Docker image and then running it.
- IDE Coupling is even possible with tools like VSCode.
- Docker can be used to automate code testing!

![Dockerfile Example](/dockerfile.png)

### Reproducable Workflows (with Gitlab/-hub)

Explain how your code or tool works with a `README.md` file.
- **Documentation** can be automated with tools like `Sphinx` or `Documenter.jl`.
- For ensuring everything is working as expected, rely on **Testing**.
- Platforms like GitLab or GitHub can run automated tests with every commit.

![Documentation Example](/screenshot_docu.jpg)
![CI Example](/ci-example.png)

## Archiving Code for Publication (with Zenodo)

When your code and paper are ready for publication, **DOI (Digital Object Identifier) System** comes to the rescue.
- Example of DOI: `10.1137/21M1456005`
- With Zenodo, you can create a DOI for your dataset/software. This makes your work citable and ensures it remains unchangeable.

![Zenodo](/zenodo.png)

## Conclusion

In the end, for reproducible:
- **Progress**: Rely on Git.
- **Environments**: Docker is your best bet.
- **Workflows**: Platforms like GitLab or GitHub can be indispensable.

The importance of reproducibility cannot be overstated in research. With the tools and best practices discussed, ensuring reproducibility becomes an achievable task.
