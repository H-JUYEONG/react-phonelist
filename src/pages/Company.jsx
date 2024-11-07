import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaShoppingCart,
  FaBox,
  FaHammer,
  FaImage,
  FaHeart,
  FaComment,
  FaStore,
  FaUsers,
} from "react-icons/fa";

import { RxDashboard, RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import { SiCakephp } from "react-icons/si";
import { RiAuctionFill } from "react-icons/ri";

// css
import "../css/Company.css";

const Company = () => {
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isDesignOpen, setIsDesignOpen] = useState(false);

  const toggleCommunityMenu = () => setIsCommunityOpen(!isCommunityOpen);
  const toggleProductMenu = () => setIsProductOpen(!isProductOpen);
  const toggleDesignMenu = () => setIsDesignOpen(!isDesignOpen);

  return (
    <div className="sidebar">
      <h2>Hide on bush</h2>
      <ul>
        <li>
          <Link to="/home">
            <FaHome className="icon" /> 사이트 바로가기
          </Link>
        </li>
      </ul>
      <h3>사이트 관리</h3>
      <ul>
        <li>
          <Link to="/dashboard">
            <RxDashboard className="icon" /> 대시보드
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <FaChartLine className="icon" /> 통계
          </Link>
        </li>
        <li>
          <Link to="/order-management">
            <FaShoppingCart className="icon" /> 주문 관리
          </Link>
        </li>
        <li>
          <div className="menu-item" onClick={toggleProductMenu}>
            <SiCakephp className="icon" /> 상품 관리
            <span className="arrow-icon">
              {isProductOpen ? <RxTriangleUp /> : <RxTriangleDown />}
            </span>
          </div>
          <ul
            className="submenu"
            style={{ display: isProductOpen ? "block" : "none" }}
          >
            <li>
              <Link to="/product-list">
                <div className="submenu-item">상품 목록</div>
              </Link>
            </li>
            <li>
              <Link to="/product-registration">
                <div className="submenu-item">상품 등록</div>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/auction-management">
            <RiAuctionFill className="icon" /> 경매 관리
          </Link>
        </li>
        <li>
          <div className="menu-item" onClick={toggleDesignMenu}>
            <FaImage className="icon" /> 도안 관리
            <span className="arrow-icon">
              {isDesignOpen ? <RxTriangleUp /> : <RxTriangleDown />}
            </span>
          </div>
          <ul
            className="submenu"
            style={{ display: isDesignOpen ? "block" : "none" }}
          >
            <li>
              <Link to="/design-registration">
                <div className="submenu-item">도안 등록</div>
              </Link>
            </li>
            <li>
              <Link to="/my-designs">
                <div className="submenu-item">나의 도안</div>
              </Link>
            </li>
            <li>
              <Link to="/shared-designs">
                <div className="submenu-item">공유 도안</div>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/favorites">
            <FaHeart className="icon" /> 찜 관리
          </Link>
        </li>
        <li>
          <Link to="/review-management">
            <FaComment className="icon" /> 리뷰 관리
          </Link>
        </li>
        <li className="community">
          <div className="menu-item" onClick={toggleCommunityMenu}>
            <FaUsers className="icon" /> 커뮤니티 활동
            <span className="arrow-icon">
              {isCommunityOpen ? <RxTriangleUp /> : <RxTriangleDown />}
            </span>
          </div>
          <ul
            className="submenu"
            style={{ display: isCommunityOpen ? "block" : "none" }}
          >
            <li>
              <Link to="/my-posts">
                <div className="submenu-item">내가 작성한 게시글</div>
              </Link>
            </li>
            <li>
              <Link to="/my-comments">
                <div className="submenu-item">내가 작성한 댓글</div>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/shopping-mall">
            <FaStore className="icon" /> 쇼핑몰
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Company;
