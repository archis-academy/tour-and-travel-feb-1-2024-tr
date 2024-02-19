# Tour and Travel Project

# Coral Buy | E-Commerce Platform

## Getting Started

- Clone this repository (ensure that your ssh connection is properly setup).
- Make sure to have [prettier](https://prettier.io/) installed in your code editor.
- Also make sure to have the [pesticide browser extension](https://chrome.google.com/webstore/detail/pesticide-for-chrome-with/neonnmencpneifkhlmhmfhfiklgjmloi) installed in your browser.

---

## Naming Conventions and Best Practices

It is important to follow proper naming conventions and best practices when working on this project. This will help us maintain a clean and readable codebase. This also helps us to avoid merge conflicts and other issues that may arise from improper naming conventions.

### Naming Conventions and How to Complete a Ticket

When working on a ticket, you need to make sure that you first have the latest changes from the `master` branch. To do this, run the following commands:

```bash
git checkout master

git pull origin master
```

After pulling the latest changes from the `master` branch, you can now create a new branch to work on your ticket. To create a new branch, run the following command:

```bash
git checkout -b <branch-name>
```

The `<branch-name>` should be in the following format:

```bash
<your-name>/<ticket-number>-<ticket-title-or-description>
```

For example, if you are working on ticket `CO-120` and your name is `John Doe`, then your branch name should be:

```bash
johnDoe/CO-120-hero-section
```

After creating your branch, you can now start working on your ticket. When you are done working on your ticket, you can now push your changes to the remote repository. To do this, run the following commands:

```bash
git add .

git commit -m "[<ticket-number>] - <commit-message>"
```

For example, if you are working on ticket `CO-120` and you have implemented the HTML markup for the hero section, then your commit message should be:

```bash
git commit -m "[CO-120] - Implemented HTML markup"
```

After committing your changes, you can now push your changes to the remote repository. To do this, run the following command:

```bash
git push origin <branch-name>
```

For example, if you are working on ticket `CO-120` and your branch name is `johnDoe/CO-120-hero-section`, then you should run the following command:

```bash
git push origin johnDoe/CO-120-hero-section
```

After pushing your changes to the remote repository, you can now create a pull request. To do this, go to the [repository](https://github.com/archis-academy/coral-buy-en-dec) and click on the `Pull requests` tab. Then click on the `New pull request` button. Make sure that the `base` branch is `master` and the `compare` branch is `<branch-name>`. The format of the title of the pull request should be:

```bash
[<ticket-number>] - <ticket-title-or-description>
```

For example, if you are working on ticket `CO-120` and you have implemented the HTML markup for the hero section, then the title of your pull request should be:

```bash
[CO-120] - HTML markup for hero section
```

Make sure to assign yourself to it and add your teammates and team lead as reviewers. After that, click on the `Create pull request` button and update the ticket on `Lokum` with the link to the pull request.

![image](https://github-production-user-asset-6210df.s3.amazonaws.com/71005514/284887226-c89971b5-9ff2-4af9-8576-4cd3683eebb4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231122T112553Z&X-Amz-Expires=300&X-Amz-Signature=4107edbd971a284461f6ee6ddb8d6014aa2c7093b4d4f163ba2ff540fb3eddc3&X-Amz-SignedHeaders=host&actor_id=71005514&key_id=0&repo_id=722052755)

![image](https://user-images.githubusercontent.com/71005514/284887977-9bece5e1-ee6b-4ffb-b098-d093ee31a52d.png)

### Best Practices

- Do not wait until the whole task is completed before you push a commit. Break down your task into smaller chunks and push a commit once a chunk is completed.

---

## PREREQUISITES

You must have completed the following catalogs:

- Frontend Development - Beginner
- Learn Git With Zero Coding Knowledge
- Web Development Basics
