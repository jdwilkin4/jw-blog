---
layout: ../../layouts/MarkdownPostLayout.astro
title: "How to avoid these Pull Request mistakes"
pubDate: 2023-11-11
description: "I have been involved with tons of code reviews lately and have seen a trend of mistakes that new developers make when creating pull requests. I wanted to share some tips on how to create a strong pull request that will help you get your code merged faster."
author: "Jessica Wilkins"
image:
  url: "/working-at-computer.jpg"
  alt: "Working at computer"
tags: ["career", "tech", "code-review", "pull-request", "git", "GitHub"]
---

It has been about a week since Hacktoberfest wrapped and I reviewed over 100+ pull requests for the [freeCodeCamp Developer Quiz Site](https://github.com/freeCodeCamp/Developer_Quiz_Site) repository as well as other repositories. While I was happy to see more people involved with open source, I did see a trend of mistakes that new developers make when creating pull requests. I wanted to share some tips on how to create a strong pull request that will help you get your code merged in faster.

## Creating PR's for issues that are still being triaged

Triage refers to the process of evaluating issues and pull requests to determine if they are valid and actionable. If the maintainers are still discussing which actions to take for an issue, that is not the time to create a PR for it.

If you create a PR for it anyway there could be a chance that is closed because the maintainers decided not to take action on it. Or the maintainers decide on a completely different solution and your PR needs to be updated.

The best thing to do in these situations is to wait until the maintainers have added a "help wanted" or "good first issue" label on it. Or they will just remove the "triage" label and add a "bug" or "enhancement" label to it. That is your signal that they are looking for help and it is available to pick up.

Another good thing to do is to participate in the conversation about that issue and offer solutions and ideas. This will help facilitate the conversation and help the maintainers decide on what actions to take. This will also show the maintainers your communication style and how you problem-solve.

Then if the issue is opened up for contribution, the maintainers might assign it to you because you were involved in the conversation and they know you are interested in working on it. That will also probably lead to a stronger PR because you have a better understanding of the issue and what actions to take.

## Lack of a strong PR title

A lot of people will just ignore the PR title and put something like "Fixes bug" or "Updating file". These are not good PR titles because as a maintainer I have no idea at a glance what this PR is supposed to be about. Most projects can have anywhere from 10-100+ open PR's at a time. So it is important to have a good PR title so that the maintainers can quickly understand what the PR is about.

A good PR title should be descriptive and concise. An example of this could be: "fix(curriculum): updating hints and explanations for date formatter project". That communicates to the maintainers that this PR is fixing a bug in the curriculum and what the bug is. It also tells them what files are being changed and what the changes are.

Some teams will want you to use the [conventional style commits](https://www.conventionalcommits.org/en/v1.0.0/), which includes the type of commit made followed by a short description. The type could either be fix, feat, docs, etc. It is always best to read through the contributing documentation to see if the project has a preferred style for PR titles.

## Not including a PR description

A lot of teams will have a PR template to structure what information is filled out. But if that is not the case, you will still need to provide some sort of basic description of what the changes are about.

If you are fixing a bug, detail what the bug was and how you fixed it. If you are adding a new feature, detail what the feature is and how you implemented it. If you are updating documentation, detail what the documentation is and how you updated it.

If you are making changes to the UI, then it would help to provide a before and after screenshot. This will help the maintainers quickly see what the changes are and how they affect the UI.

Sometimes, it helps to include a short video of the new behavior if it is a new feature. This will help the maintainers quickly see what the new feature is and how it works.

The goal of the PR description is to provide enough context and information so the maintainers can quickly understand what the changes are and how they affect the project. This will also facilitate the code review process because the maintainers will have a better understanding of what the changes are and what to look for.

## Not filling out the PR template

A PR template is a great way to structure the information that is needed for a PR. It will usually include a description, a checklist, and a section for screenshots. A lot of people are in a rush to get a PR up so they bypass the PR template altogether. But that is not a good idea.

The PR template is there for a reason. Make sure you fill out the necessary information and have followed all of the rules for that particular project. Some PR templates will have checklist items like "I have read the contributing documentation" or "I have run the tests locally". Make sure you have done all of the checklist items before submitting the PR.

Some projects will not review your PR until that information is filled out, so make sure you read through the contributing documentation and fill out the PR template correctly.

## Not running the tests locally

When you have made your changes, it is always important to test your code. Make sure you can run the app locally and test that you haven't broken anything. Also, make sure to add any relevant unit or integration tests for your changes.

Not adding relevant tests can introduce new bugs into the project so you want to make sure that everything works as expected. If you are not sure how to run the tests locally, make sure to read through the contributing documentation or ask for help in the project's discord or slack channel.

## Not formatting and linting your code

Most projects will have commands you can run locally to format and lint your code. Make sure you run those commands before submitting your PR. This will help you catch any syntax errors or formatting issues before submitting your PR.

You don't want to submit a PR with a bunch of syntax errors or formatting issues because that will make it harder for the maintainers to review your code. A lot of projects will have automated linters and formatting checks for PR's so make sure you run those commands before submitting your PR.

## Not reviewing your code before the review

A lot of people will submit a PR and then immediately ask for review, without reviewing their changes first. As a maintainer, I have done dozens of reviews, where I will ask the contributor why they made certain changes to unrelated files and they won't realize that they made those changes.

When you submit a PR, you should always look at the files changed tab and review your changes. Make sure you didn't make any changes to files that are unrelated to your PR. If you did, then you will need to revert those changes and push up a commit.

Also, make sure you didn't leave in any unneeded log statements or commented-out code that you forgot to remove. This will help you catch any mistakes before the maintainer does and will make the review process go faster.

## Pinging the reviewers

When your PR is submitted, the maintainers will get notifications that a new PR is up for review. They will get to it when they have time so you don't need to ping them in the PR comments that you are ready for review.

Usually, it takes anywhere from a few hours to a few days for maintainers to get around to reviewing your PRs. Remember that maintainers are busy with other tasks and will get to your PR when they have time. So you don't want to repeatedly ping them in the PR comments that you are ready for review.

## Conclusion

Contributing to open source has a lot of benefits and can help you grow as a developer. But it is important to make sure you are creating strong PR's that will benefit the project and help you get your code merged in faster.

I hope these tips will help you create stronger PR's and help you get more involved with open source. 🎉
