rm -r ~/Downloads/LisAndAusWedding/*
cp -r * ~/Downloads/LisAndAusWedding/
touch ~/Downloads/LisAndAusWedding/backup.zip
mysqldump --user=blog --password=password --default-character-set=utf8 wedding | gzip > "/home/fredsnothere/Downloads/LisAndAusWedding/backup.zip"
ls ~/Downloads/LisAndAusWedding/
./git.sh add .
./git.sh commit -m autocopnco
./git.sh push 




