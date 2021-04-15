import {Component} from "react";
import "../css/footer.scss"
class Footer extends Component{
    render() {
        return(
            <div class="main-div">

                <footer class="flex-rw">

                    <ul class="footer-list-top">
                        <li>
                            <h4 class="footer-list-header">Содржина</h4></li>
                        <li><a href='/' class="generic-anchor footer-list-anchor" itemprop="significantLink">Почетна</a></li>
                        <li><a href='/createPost' class="generic-anchor footer-list-anchor" itemprop="significantLink">Креирај објава</a></li>
                    </ul>
                    <ul class="footer-list-top">
                        <li>
                            <h4 class="footer-list-header">Work & Travel</h4></li>
                    </ul>
                    <ul class="footer-list-top">
                        <li id='help'>
                            <h4 class="footer-list-header">Контакт</h4></li>
                        <li><a href='/contact' class="generic-anchor footer-list-anchor" itemprop="significantLink">Контакт</a></li>
                    </ul>
                    <section class="footer-social-section flex-rw">
                        <span class="footer-social-overlap footer-social-connect">
                            Придружи <span class="footer-social-small">ни</span> СЕ!
      </span>
                        <span class="footer-social-overlap footer-social-icons-wrapper">
                            <a href="https://www.pinterest.com/paviliongift/" class="generic-anchor" target="_blank" title="Pinterest" itemprop="significantLink"><i class="fa fa-pinterest"></i></a>
                            <a href="https://www.facebook.com/paviliongift" class="generic-anchor" target="_blank" title="Facebook" itemprop="significantLink"><i class="fa fa-facebook"></i></a>
                            <a href="https://twitter.com/PavilionGiftCo" class="generic-anchor" target="_blank" title="Twitter" itemprop="significantLink"><i class="fa fa-twitter"></i></a>
                            <a href="http://instagram.com/paviliongiftcompany" class="generic-anchor" target="_blank" title="Instagram" itemprop="significantLink"><i class="fa fa-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" class="generic-anchor" target="_blank" title="Youtube" itemprop="significantLink"><i class="fa fa-youtube"></i></a>
                            <a href="https://plus.google.com/+Paviliongift/posts" class="generic-anchor" target="_blank" title="Google Plus" itemprop="significantLink"><i class="fa fa-google-plus"></i></a>
                        </span>
                    </section>
                    <section class="footer-bottom-section flex-rw">
                        <div class="footer-bottom-wrapper">
                            <i class="fa fa-copyright" role="copyright">

                            </i> Проект изработен за цели на дипломска работа - 2020
                        </div>
                    </section>
                </footer>
            </div>
        )
    }
}
export default Footer;