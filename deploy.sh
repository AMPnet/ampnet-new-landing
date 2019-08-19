#! /bin/bash
ssh root@ampnet.io "rm -rf /var/www/ampnet-landing/; mkdir /var/www/ampnet-landing" &&
scp -r ../ampnet-landing/* root@ampnet.io:/var/www/ampnet-landing/ 