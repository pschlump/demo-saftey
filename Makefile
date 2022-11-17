

# Demo Saftey
# 1. serer 89-gin: 
# 		lrwxr-xr-x  1 philip  staff  25 Nov 14 06:45 /Users/philip/bin/89-gin -> ../Projects/89-gin/89-gin
# 2. Web pages
#		.../github.com/pschlump/demo-saftey
#		-> pschlump@nfc-auth.com:/home/pschlump/www/easy-2c-why.com/www
#
all:

deploy:

run:
	npm run serve


install_bootstrap:
	npm install --save bootstrap
	npm install --save @popperjs/core
	npm install vue-simple-password-meter@next --save

