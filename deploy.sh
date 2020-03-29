#! /bin/bash
ssh root@ampnet.io "rm -rf /var/www/ampnet-landing/; mkdir /var/www/ampnet-landing" &&
scp -r ../ampnet-new-landing/* root@ampnet.io:/var/www/ampnet-landing/ 