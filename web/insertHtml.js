const LOGIN_URL = 'http://127.0.0.1:9999/auth/login'
const UPLOAD_VIDEO_URL = 'http://127.0.0.1:9999/upload_video_new'
const CREATE_ARCHIVE_URL = 'http://127.0.0.1:9999/create_archive'
document.getElementById('comexp').innerHTML=`
<iframe name="dummyframe" id="dummyframe" style="display:none"></iframe>
<div class="bs-isolated">
    <button onclick="document.getElementById('main-auth').classList.remove('d-none')">login</button>
    <div id="main-auth" class="d-none">
        <div class="row justify-content-around align-items-center">
            <div id="register" class="col-5">
                <form action="" method="post" id="registerform" class="form-centered"><input placeholder="email"
                        type="email" name="email" id="email"> <input placeholder="name" type="text" name="name"
                        id="name"> <input placeholder="password" type="password" name="password" id="password"> <input
                        disabled="disabled" class="submit-button" id="submit" type="submit" value="REGISTER"></form>
            </div>
            <h1 class="col-2 d-inline text-center align-middle">OR</h1>
            <div id="login" class="col-5">
                <form action="${LOGIN_URL}" method="post" target="dummyframe" id="loginform"
                    class="form-centered"><input placeholder="email" type="text" name="email" id="email"> <input
                        placeholder="password" type="password" name="password" id="password"> <input
                        class="submit-button" id="submit" type="submit" value="LOGIN"></form>
            </div>
        </div>
    </div>
    <div id="main-archives">
        <div id="please-login">
            <h1>pleas login</h1>
        </div>
        <div id="archives" class="d-none">
            <h1>ARCHIVES</h1>
            <div id="archives-container" class="row flex-nowrap overflow-auto mx-0"></div>
        </div>
        <div id="videos" class="d-none">
            <h1>VIDEOS</h1>
            <div class="row mx-1 my-3">
                <form class="col-4" action="${UPLOAD_VIDEO_URL}" method="post" target="dummyframe" id="upload-video-form">
                    <input type="file" name="upload-file" id="upload-file" placeholder=""> 
                    <input type="text" hidden name="archive-id" id="archive-id" placeholder=""> 
                    <input type="text" hidden name="md5" id="md5" placeholder=""> 
                    <input class="submit-button" id="submit-upload" type="submit" value="ЗАГРУЗИТЬ ВИДЕО">
                </form>
            </div>
            <hr>
            <div class="row mx-1 my-3">
                <form class="col-4" action="${CREATE_ARCHIVE_URL}" method="post" target="dummyframe" id="create-archive-form">
                    <input type="text" name="name" id="archive-name" placeholder=""> 
                    <input class="submit-button" id="submit-create" type="submit" value="создать архив">
                </form>
            </div>
            <hr>
            <div id="videos-container" class="row flex-nowrap overflow-auto mx-0"></div>
        </div>
    </div>
</div>
`