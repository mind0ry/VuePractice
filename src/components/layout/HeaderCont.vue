<template>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link class="navbar-brand" to="/">SpringMVC</router-link>
            </div>
            <ul class="nav navbar-nav">
                <li class="active"><router-link to="/">Home</router-link></li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">카페
                        <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><router-link to="/cafe">카페 검색</router-link></li>
                        <li><a href="#">맛집 추천</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>
    