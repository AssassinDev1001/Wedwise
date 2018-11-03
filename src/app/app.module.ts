import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {AngularFireModule} from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {CategoryPage} from '../pages/category/category';
import {ProductsPage} from '../pages/products/products';
import {ProductDetailsPage} from '../pages/product-details/product-details';
import {CartPage} from '../pages/cart/cart';
import {AddressPage} from '../pages/address/address';
import {RegisterPage} from '../pages/register/register';
import {MyorderPage} from '../pages/myorder/myorder';
import {OrderDetailsPage} from '../pages/order-details/order-details';
import {MyProfilePage} from '../pages/my-profile/my-profile';
import {WishlistPage} from '../pages/wishlist/wishlist';
import {MapPage} from '../pages/map/map';
import {ItemmapPage} from '../pages/itemmap/itemmap';
import {WritecommentPage} from '../pages/writecomment/writecomment';
import {YoutubePage} from '../pages/youtube/youtube';
import {EventPage} from '../pages/event/event';
import {ChecklistPage} from '../pages/checklist/checklist';
import {GuestlistPage} from '../pages/guestlist/guestlist';
import {YoutubePipe} from '../pipes/youtube/youtube';
import {ChatPage} from '../pages/chat/chat';
import {ChattingPage} from '../pages/chatting/chatting';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Camera} from '@ionic-native/camera';
import {EmailComposer} from '@ionic-native/email-composer';
import {ChecklistboxPage} from '../pages/checklistbox/checklistbox';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {HttpModule, Http} from '@angular/http';
import {FindbycategoryPage} from '../pages/findbycategory/findbycategory';
import {NotificationPage} from '../pages/list/list';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AdMobFree} from '@ionic-native/admob-free';


/*----------------PROVIDERS & NATIVES---------------------*/

import {Auth} from '../providers/auth';
import {Config} from '../providers/config';
import {Values} from '../providers/values';
import {Service} from '../providers/service';
import {Facebook} from '@ionic-native/facebook';
import {WpService} from '../providers/wp-service';

//import { GooglePlus } from '@ionic-native/google-plus';

import {Functions} from '../providers/functions/functions';
import {SocialSharing} from '@ionic-native/social-sharing';
//import { TwitterConnect } from '@ionic-native/twitter-connect';
import {Push} from '@ionic-native/push';
import {PayPal} from '@ionic-native/paypal';
import {Stripe} from '@ionic-native/stripe';
import {NativeStorage} from '@ionic-native/native-storage';
//import { Crop } from '@ionic-native/crop';


import {LoginLayout1} from '../components/login/layout-1/login-layout-1';
import {GoogleCardLayout1} from '../components/list-view/google-card/layout-1/google-card-layout-1';
import {ExpandableLayout2} from '../components/list-view/expandable/layout-2/expandable-layout-2';
import {AppearanceAnimationLayout2} from '../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2';
import {SwipeToDismissLayout2} from '../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2';
import {SwipeToDismissLayout3} from '../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3';
import {ParallaxLayout3} from '../components/parallax/layout-3/parallax-layout-3';
import {ParallaxLayout4} from '../components/parallax/layout-4/parallax-layout-4';
import {AppearanceAnimationLayout4} from '../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4';
import {ParallaxLayout2} from '../components/parallax/layout-2/parallax-layout-2';

import {Geolocation} from '@ionic-native/geolocation';
import {BackgroundGeolocation} from '@ionic-native/background-geolocation';
import {LocationTrackerProvider} from '../providers/location-tracker/location-tracker';
import {IonicImageViewerModule} from 'ionic-img-viewer';

import {CallNumber} from '@ionic-native/call-number';
import {GlobalProvider} from '../providers/global/global';
import {LaunchNavigator, LaunchNavigatorOptions} from '@ionic-native/launch-navigator';
import {EmojiProvider} from '../providers/emoji/emoji';
import {ComponentsModule} from "../components/components.module";
import {CommonModule} from "@angular/common";
import {ChatVendorPage} from "../pages/chat-vendor/chat-vendor";


export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const firebaseConfig = {
    apiKey: "AIzaSyDrZY5KUdy9XldwZBsh15F_hBoRSwHivgc",
    authDomain: "wedwise-app-1535104268391.firebaseapp.com",
    databaseURL: "https://wedwise-app-1535104268391.firebaseio.com",
    projectId: "wedwise-app-1535104268391",
    storageBucket: "wedwise-app-1535104268391.appspot.com",
    messagingSenderId: "751512906322"

};


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        LoginLayout1,
        GoogleCardLayout1,
        ExpandableLayout2,
        CategoryPage,
        AppearanceAnimationLayout2,
        SwipeToDismissLayout2,
        ProductsPage,
        ParallaxLayout3,
        ProductDetailsPage,
        ParallaxLayout4,
        CartPage,
        AddressPage,
        RegisterPage,
        MyorderPage,
        OrderDetailsPage,
        MyProfilePage,
        WishlistPage,
        SwipeToDismissLayout3,
        AppearanceAnimationLayout4,
        ParallaxLayout2,
        MapPage,
        ItemmapPage,
        WritecommentPage,
        YoutubePipe,
        YoutubePage,
        EventPage,
        ChecklistPage,
        GuestlistPage,
        ChatPage,
        ChattingPage,
        ChecklistboxPage,
        FindbycategoryPage,
        ChatVendorPage,
        NotificationPage
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        HttpClientModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        IonicModule.forRoot(MyApp),
        IonicImageViewerModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
        ComponentsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        LoginLayout1,
        GoogleCardLayout1,
        ExpandableLayout2,
        CategoryPage,
        AppearanceAnimationLayout2,
        SwipeToDismissLayout2,
        ProductsPage,
        ParallaxLayout3,
        ProductDetailsPage,
        ParallaxLayout4,
        CartPage,
        AddressPage,
        RegisterPage,
        MyorderPage,
        OrderDetailsPage,
        MyProfilePage,
        WishlistPage,
        SwipeToDismissLayout3,
        AppearanceAnimationLayout4,
        ParallaxLayout2,
        MapPage,
        ItemmapPage,
        WritecommentPage,
        YoutubePage,
        EventPage,
        ChecklistPage,
        GuestlistPage,
        ChatPage,
        ChattingPage,
        ChecklistboxPage,
        FindbycategoryPage,
        ChatVendorPage,
        NotificationPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Auth,
        Config,
        NativeStorage,
        Values,
        Service,
        Facebook,
        WpService,
        Functions,
        CallNumber,
        //GooglePlus,
        SocialSharing,
        // TwitterConnect,
        Push,
        PayPal,
        Stripe,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Geolocation,
        BackgroundGeolocation,
        LocationTrackerProvider,
        AdMobFree,
        Camera,
        GlobalProvider,
        EmailComposer,
        LaunchNavigator,
        AngularFireDatabase,
        AngularFireAuth,
        EmojiProvider,
    ]
})
export class AppModule {
}
