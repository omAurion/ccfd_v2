@echo off
pushd .
cd bin
ContentEncoderUtil.exe -t ..\..\build\template.html -u qwe -p qweqwe -i ..\dfcc.json -o ..\..\build\DFCC_CC.html
popd