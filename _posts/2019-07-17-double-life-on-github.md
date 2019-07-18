---
layout: "post"
title: "Leading a Double Life on GitHub"
---

<img src="/assets/pictures/business_casual.png" class="responsive-image">

A lot of us write computer code.
Some of us do it as a part of school.
Some of us do it for a living.
Whether we like it or not, at some point, we who
write code are going to have to deal with using
[GitHub][1] in our lives.
Some of us use separate accounts to keep two
sides of our lives separated from each other.
And now you, also living in that boat, feel like
you're swamped trying when switching from one side
to another.
You have a [plug-in for your browser][2] that even
lets you handle the Web site as your aliases.
What about pushing and pulling with SSH?
It's totally manageable!

[1]: https://github.com/
[2]: https://github.com/mozilla/multi-account-containers

But we're not covering the basics of using Git with
SSH over here.
We're presuming you're here because you have a
special use-case involving a separation of church
and state.
I'll leave deciding which aspect of your life is the
church and which is the state as a philosophical
exercise to the reader.
It must be a pain in the rumpus to keep pushing and
switching between your work and pleasure accounts.
We're presuming you made separate SSH keys and have
[added them to your accounts][3].
If you use a single GitHub account for both sides,
your presence is no longer necessary for the
remainder of this experiment.

[3]: https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account

The Trick
---------

The trick is in your SSH configuration at
`${HOME}/.ssh/config` and your remotes' URIs.
When you create a new repository on GitHub, do you
remember the instructions it gives you?
They have you run
`git remote add origin git@github.com:your-name/your-repo.git`.
What if I told you that you can turn the user-name
and host-name you SSH into a unique nick-name for
your convenience?

```
# ~/.ssh/config

# Work account
Host gh_pain
IdentityFile ~/.ssh/id_pain
HostName github.com
User     git

# Personal account
Host gh_pleasure
IdentityFile ~/.ssh/id_pleasure
HostName github.com
User     git
```

SSH's [documentation][4] may not be the most helpful
for fresh minds, but it'll help to follow along as I
explain this snippet.
The `Host` specifies a name for the following
settings until the next time you use it again.
That name becomes your nick-name for those settings!
At minimum, you will need to specify which
`IdentityFile` is associated with which nick-name
and the typical SSH `User` and `Hostname`.
Those last two settings will be `git` and
`github.com`, respectively.

[4]: https://manpage.me/?q=ssh_config

Now that's taken care off, all that is left is to
change your repositories' remotes' URIs to match
their intention.
Just replace `git@github.com` to `gh_pain` or
`gh_pleasure` or whatever else you named them.
Give your repositories a good push and a pull to
make sure they work.
This time, you won't need to worry about which alter
ego is being business casual on the streets or
hacking the planet in the sheets.

```sh
[rocx@compy386 ~]$ git remote add origin gh_pleasure:your-name/your-repo.git
```
