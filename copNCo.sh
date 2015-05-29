rm -r ~/Downloads/LisAndAusWedding/*
cp -r * ~/Downloads/LisAndAusWedding/
git --git-dir=/home/fredsnothere/Downloads/LisAndAusWedding/.git/ --work-tree=/home/fredsnothere/Downloads/LisAndAusWedding add --all .
git --git-dir=/home/fredsnothere/Downloads/LisAndAusWedding/.git/ --work-tree=/home/fredsnothere/Downloads/LisAndAusWedding commit -m "Update to stuff"
git --git-dir=/home/fredsnothere/Downloads/LisAndAusWedding/.git/ --work-tree=/home/fredsnothere/Downloads/LisAndAusWedding push origin master





