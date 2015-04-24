$(document).ready(function(){

  var myCanvas = $('#my-canvas')
  // var objects = [];

  // Define scene and camera
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 45, myCanvas.innerWidth()/myCanvas.innerHeight(), 0.1, 1000 );
  camera.position.set(5, 0, 30)
  // camera.lookAt(new THREE.Vector(1, 1, 50));

  // Define renderer
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( myCanvas.innerWidth(), myCanvas.innerHeight() );
  renderer.setClearColor( 0xf0f0f0 );
  myCanvas.append( renderer.domElement );

  // Define cube geometry and material
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshBasicMaterial( { color: 0xdeae66 } );
  var cube = new THREE.Mesh( geometry, material );

  // Define 'add cube' function
  var addCube = function() {
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshLambertMaterial( { color: 0xdeae66 } );
    var cube = new THREE.Mesh( geometry, material );
    window.cube01 = cube;

    cube.position.x = Math.floor((Math.random() * 10) + 1);
    cube.position.y = Math.floor((Math.random() * 10) + 1);
    scene.add( cube );
  }
  
  // addCube button
  $('#add-cube-btn').click(function(){
    addCube();
  });

  // Define scene lighting
  var light = new THREE.PointLight( 0xFFFF00 );
  light.position.set( 10, 0, 10 );
  scene.add( light );

  // define render/animation loop
  var render = function () {
    requestAnimationFrame( render );

    scene.traverse(function(e) {
      if (e instanceof THREE.Mesh) {
        e.rotation.x += 0.02;
        e.rotation.y += 0.02;        
      }
    });

    renderer.render(scene, camera);
  };

  // call render loop
  render();

});