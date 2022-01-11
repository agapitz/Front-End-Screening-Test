var userList
var fullList
var isSort = false;
var isAsc = true;
var imgList = ["https://picsum.photos/id/1/400/300", "https://picsum.photos/id/1001/400/300",
    "https://picsum.photos/id/1004/400/300", "https://picsum.photos/id/1008/400/300",
    "https://picsum.photos/id/1027/400/300", "https://picsum.photos/id/1006/400/300",
    "https://picsum.photos/id/1005/400/300", "https://picsum.photos/id/129/400/300",
    "https://picsum.photos/id/177/400/300", "https://picsum.photos/id/1012/400/300"]
function searchUser() {
    var text = document.getElementById('searchTxt')
    this.userList = this.fullList.filter(data => {
        return data.name.toLowerCase().includes(text.value.toLowerCase())
    })
    console.log(this.userList)
    sortUser();
}

function changeSort() {
    this.isSort = true;
    sortUser();
}

function sortUser() {
    var sort = document.getElementById('selectedSort');
    if (this.isSort) {
        if (sort.value == 1) {
            this.userList.sort((a, b) => a.name.localeCompare(b.name))
            console.log(this.userList)
        } else {
            this.userList.sort((a, b) => b.name.localeCompare(a.name))
        }
    }
    listUser();
}

function listUser() {
    var div = document.getElementById('userList')
    div.innerHTML = '';
    var i = 0
    this.userList.forEach(info => {
        i++;
        div.innerHTML += ` <div class="col-md-4" style="margin-top:30px">
        <div class="col-md-12">
            <div class="card h-100"  style="border:none">
                <div class="row">
                    <div class="col-md-12 col-6 d-sm-none d-md-block d-none d-sm-block">
                        <img src="${info.img}" id="profileIMG"
                            class="card-img-top img-fluid rounded">
                    </div>
                    <div class="col-md-12 col-6 float-sm-start float-xl-end">
                        <div class="card-body">
                            <p class="card-title h5">${info.name}</p>
                            <p class="text-muted">@${info.username}</p>
                            <p class="text-info">${'"' + info.company.catchPhrase + '"'}</p>
                           
                        </div>
                    </div>
                    <div class="col-md-12 col-6 d-block d-sm-none" style="padding-top:10px;padding-right:20px">
                        <img src="${info.img}" id="profileIMG"
                            class="img-fluid rounded">
                    </div>
                    <div class="col-md-12 col-6 d-none d-sm-block d-md-none" style="padding-top:10px;padding-right:20px">
                        <img src="${info.img}" id="profileIMG"
                            class="img-fluid rounded">
                    </div>
                    </div>
                    <div class="row"  style="margin-top:-30px">
                        <div class="col-md-12">
                            <div class="card-body">
                            <div class="media">
                            <div class="media-left">
                                <i class="bi bi-envelope"></i>
                            </div>
                            <div class="media-body">
                                ${info.email}
                            </div>
                        </div>
                                <div class="media">
                                    <div class="media-left">
                                        <i class="bi bi-geo-alt"></i>
                                    </div>
                                    <div class="media-body">
                                        ${info.address.street + ',' + info.address.suit + ',' + info.address.zipcode
            +
            ',' +
            info.address.geo.lat + ',' + info.address.geo.lng}
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <i class="bi bi-telephone"></i>
                                    </div>
                                    <div class="media-body">
                                        ${info.phone}
                                    </div>
                                </div>

                                <div class="media">
                                    <div class="media-left">
                                        <i class="bi bi-globe2"></i>
                                    </div>
                                    <div class="media-body">
                                        ${info.website}
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <i class="bi bi-briefcase"></i>
                                    </div>
                                    <div class="media-body">
                                        ${info.company.name}
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <i class="bi bi-building"></i>
                                    </div>
                                    <div class="media-body">
                                        ${info.company.bs}
                                    </div>
                                </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    })
}

function loadUser() {
    var sort = document.getElementById('selectedSort');
    sort.value = ""
    fetch("https://jsonplaceholder.typicode.com/users").then(
        (resp) => {
            return resp.json();
        }).then((data) => {
            this.userList = data;
            var i = 0;
            this.userList.forEach(info => {
                info.img = imgList[i]
                i++;
            });
            this.fullList = this.userList
            sortUser();
        });
}


loadUser();