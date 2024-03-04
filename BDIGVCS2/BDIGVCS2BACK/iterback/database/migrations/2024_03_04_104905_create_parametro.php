<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('parametro', function (Blueprint $table) {
            $table->id();
            $table->dateTime('dia')->nullable(); 
            $table->integer('temperatura')->nullable(); 
            $table->integer('humedad')->nullable(); 
            $table->integer('iluminacion')->nullable(); 
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->unsignedBigInteger('fase_id');
            $table->foreign('fase_id')->references('id')->on('fase');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parametro');
    }
};
