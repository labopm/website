# The Lab - Website

## How to edit content

Content files are all in markdown (with the extension .md).

## How to add people photos

People photos should be added in the [people image directory](https://github.com/labopm/website/blob/master/assets/img/lab/people/).

Please provide us a headshot that does its best to satisfy the following criteria.

* Shot from the waist up or closer, i.e. not originally a full-body photo that’s been cropped
* Shot in front of a solid or otherwise uncluttered background
* Lit by natural sunlight, either outdoors or near a window (or in a studio if you are fancy)
* If shot outdoors, not under the full midday sun which creates harsh highlights and shadows
* Exposed correctly: the photo shouldn't have any areas that are 100% white (blown out) or 100% black (under-exposed)
* Avoid sunglasses, headphones, hats. Just you!

### Naming your image

When you upload a person image to github please name it in the following format:

```
[first-last].[MIME type]
```

For example:

```
sean-baker.jpg
```

#### Connecting your image to your page

When you are done you need to add that same image filename to the front-matter of your person page using the key "image_name:". For example:

```
image_name: sean-baker.jpg
```

Person pages are in the [_people directory](https://github.com/labopm/website/tree/master/_people)

<hr/>

## Setup for your local environment for development

### Requirements

This repo uses [Jekyll](https://jekyllrb.com/) to serve and build the markup of the site. CSS and JS are managed by [Gulp](https://gulpjs.com/).

Thus you will need [Ruby](https://www.ruby-lang.org) ( > version 2.4.2 ) and [Node](https://nodejs.org/en/download/) ( > 11.6 ). The Node install will also provide npm, the Node package manager.

You may consider using a Ruby version manager such as
[rbenv](https://github.com/sstephenson/rbenv) or [rvm](https://rvm.io/) to
help ensure that Ruby version upgrades don't mean all your
[gems](https://rubygems.org/) will need to be rebuilt.

On OS X, you can also use [Homebrew](http://brew.sh/) to install Ruby in
`/usr/local/bin`, which may require you to update your `$PATH` environment
variable. Here are the commands to follow to install via homebrew:

```shell
$ brew update
$ brew install ruby
$ brew install node
```

If you do use rbenv it is important to set your global Ruby version to 2.4.2 or higher so that you can install gems properly:

```shell
$ rbenv global
```

### Installation

Now that you have verified that you have Ruby and Node installed, run the following commands to install the packages that the design system depends upon:

```shell
$ bundle install
$ npm install -g gulp
$ npm install -g gulp-cli
$ npm install
$ npm run build
```

The post-install step should run bundle install.

### Development

To view and work on the site run:

```shell
$ npm start
```

This will perform the necessary Jekyll build, generate concatenated CSS and JS files, serve the site, and watch for changes to Sass and JS files. You should now be able to visit `http://localhost:4000/` and view the site locally.

Questions or need help with setup? Feel free to open an issue here [https://github.com/labopm/website/issues](https://github.com/labopm/website/issues).
